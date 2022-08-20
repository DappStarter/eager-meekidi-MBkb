require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone strategy razor noble honey good end army gaze'; 
let testAccounts = [
"0x939ddefebd8243c037bf1eba8fba2be385621ca6d115460cdcd72a182063432f",
"0x6737a2aeb8b3f8de9f2eb02a431acc57e709af4f82c1615c8ceb5db2aed97a3c",
"0x54872c6c5ad11affda56461dc26bfc78dc3d15c5c325d0bacda4655cb2585663",
"0x97928983f49b666423f13474e7282f4903b58be10350ba7c6b4f17bbdf82b843",
"0xca675847da341708fe97dde8cc4c03ccc1245a2f0a7c8ab8e0d45c7137742933",
"0x6aa9257c6268aafb7c786076bbb2c5e165b7e83e9c46915192c4c1c73b11f190",
"0x2fcad4ee0c24f35d859007cef1ff8bdbc68706913465802493b0378b79db1976",
"0x02976dc23508c6cfa0aa0c537898906a421a2f9b60899283965025eef2ab3523",
"0xcd765899f5857e41b84587077e06fa035b19c46363e94d4adbadd09f9915d8ec",
"0x4cf84e11d9ddb11931f0ed5c621e635736758be7815614fbaacf300b81e3fbba"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


