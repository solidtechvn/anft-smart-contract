// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";

/*
*********   ░█████╗░  ███╗░░██╗  ███████╗  ████████╗   *********
*********   ██╔══██╗  ████╗░██║  ██╔════╝  ╚══██╔══╝   *********
*********   ███████║  ██╔██╗██║  █████╗░░  ░░░██║░░░   *********
*********   ██╔══██║  ██║╚████║  ██╔══╝░░  ░░░██║░░░   *********
*********   ██║░░██║  ██║░╚███║  ██║░░░░░  ░░░██║░░░   *********
*********   ╚═╝░░╚═╝  ╚═╝░░╚══╝  ╚═╝░░░░░  ░░░╚═╝░░░   *********
*/ 


contract TokenProxy is ERC1967Proxy {
    constructor(
        address implementation,
        address owner,
        bytes memory data
    ) ERC1967Proxy(implementation, data) {}
}