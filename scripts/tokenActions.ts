import { BigNumber } from 'ethers';
import { getWalletByPK } from '../utils';
import { TokenInstance } from './BO/manageRoles';
import { convertBnToDecimal, convertDecimalToBn } from './BO/utils';

const { TESTNET_DEPLOYER_PRIVATE_KEY } = process.env;
const { STAKEHOLDER_PK } = process.env;

const shWallet = getWalletByPK(STAKEHOLDER_PK as string);

const transferToken = async () => {
  const accounts = [
    '0x2f09Feb7882fAA415604D179c7d4d12205246854',
    '0x9b11111D18C4D2D4f93D68546dF32b4E9F33033d',
    '0xe767E40599a94294Fc0385014311907aD434a4C7',
    '0xbB16550010cA6e7648A065a3DA7ccff39CEfcAC5',
    '0x1eba2c845d45Bdf1C01338C03968A77cAcf618dA',
    '0x43f96726B105b448798b6eebB04a09ee99921608',
    '0x42dFeEDCD1575484DfdC84c216fAD75f3e20528D',
    '0xeA27071727822834552879E17c2320C81a1bf909',
    '0xe1D3ED56475400f54a5Efd336C45738F37c4b7a7',
    '0x916893E3EaeF15198DE3B527400582c2bb5D4a05'
  ];
  if (!TESTNET_DEPLOYER_PRIVATE_KEY) return;

  const deployerWallet = getWalletByPK(TESTNET_DEPLOYER_PRIVATE_KEY);
  const contractWithSigner = await TokenInstance.connect(deployerWallet);
  const transferAmount = convertDecimalToBn(String(10_000_000));

  for (let index = 0; index < accounts.length; index++) {
    const element = accounts[index];
    const tx = await contractWithSigner.transfer(element, transferAmount);
    await tx.wait();
    console.log(tx.hash);
    console.log('-------------------');
  }
};

const checkBalance = async () => {
  const shBal = await TokenInstance.balanceOf(shWallet.address);
  console.log(`shBal: ${convertBnToDecimal(shBal)}`);
};

const main = async () => {
  // await checkBalance();
  await transferToken();
};

main().catch((error) => {
  console.error(error);
});
