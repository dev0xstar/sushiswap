// SPDX-License-Identifier: UNLICENSED
// Audit on 5-Jan-2021 by Keno and BoringCrypto
pragma solidity 0.6.12;
import "@boringcrypto/boring-solidity/contracts/BoringOwnable.sol";
import "@boringcrypto/boring-solidity/contracts/BoringFactory.sol";

// solhint-disable no-inline-assembly

contract MasterContractManager is BoringOwnable, BoringFactory {
    event LogWhiteListMasterContract(address indexed masterContract, bool approved);
    event LogSetMasterContractApproval(address indexed masterContract, address indexed user, bool approved);
    event LogRegisterProtocol(address indexed protocol);

    /// @notice masterContract to user to approval state
    mapping(address => mapping(address => bool)) public masterContractApproved;
    /// @notice masterContract to whitelisted state for approval without signed message
    mapping(address => bool) public whitelistedMasterContracts;
    /// @notice user nonces for masterContract approvals
    mapping(address => uint256) public nonces;

    bytes32 private constant DOMAIN_SEPARATOR_SIGNATURE_HASH = keccak256("EIP712Domain(string name,uint256 chainId,address verifyingContract)");
    // See https://eips.ethereum.org/EIPS/eip-191
    string private constant EIP191_PREFIX_FOR_EIP712_STRUCTURED_DATA = "\x19\x01";
    bytes32 private constant APPROVAL_SIGNATURE_HASH =
        keccak256("SetMasterContractApproval(string warning,address user,address masterContract,bool approved,uint256 nonce)");

    // solhint-disable-next-line var-name-mixedcase
    bytes32 private immutable _DOMAIN_SEPARATOR;
    // solhint-disable-next-line var-name-mixedcase
    uint256 private immutable DOMAIN_SEPARATOR_CHAIN_ID;

    constructor() public {
        uint256 chainId;
        assembly {
            chainId := chainid()
        }
        _DOMAIN_SEPARATOR = _calculateDomainSeparator(DOMAIN_SEPARATOR_CHAIN_ID = chainId);
    }

    function _calculateDomainSeparator(uint256 chainId) private view returns (bytes32) {
        return keccak256(abi.encode(DOMAIN_SEPARATOR_SIGNATURE_HASH, keccak256("BentoBox V1"), chainId, address(this)));
    }

    // solhint-disable-next-line func-name-mixedcase
    function DOMAIN_SEPARATOR() public view returns (bytes32) {
        uint256 chainId;
        assembly {
            chainId := chainid()
        }
        return chainId == DOMAIN_SEPARATOR_CHAIN_ID ? _DOMAIN_SEPARATOR : _calculateDomainSeparator(chainId);
    }

    /// @notice Other contracts need to register with this master contract so that users can approve them for the BentoBox.
    function registerProtocol() public {
        masterContractOf[msg.sender] = msg.sender;
        emit LogRegisterProtocol(msg.sender);
    }

    /// @notice Enables or disables a contract for approval without signed message.
    function whitelistMasterContract(address masterContract, bool approved) public onlyOwner {
        // Checks
        require(masterContract != address(0), "MasterCMgr: Cannot approve 0");

        // Effects
        whitelistedMasterContracts[masterContract] = approved;
        emit LogWhiteListMasterContract(masterContract, approved);
    }

    /// @notice Approves or revokes a `masterContract` access to `user` funds.
    /// @param user The address of the user that approves or revokes access.
    /// @param masterContract The address who gains or loses access.
    /// @param approved If True approves access. If False revokes access.
    /// @param v Part of the signature. (See EIP-191)
    /// @param r Part of the signature. (See EIP-191)
    /// @param s Part of the signature. (See EIP-191)
    // F4 - Check behaviour for all function arguments when wrong or extreme
    // F4: Don't allow masterContract 0 to be approved. Unknown contracts will have a masterContract of 0.
    // F4: User can't be 0 for signed approvals because the recoveredAddress will be 0 if ecrecover fails
    
}
