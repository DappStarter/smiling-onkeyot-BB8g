require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note sad sniff grace slice tackle gesture'; 
let testAccounts = [
"0xa7f0bf41256d6959751a46c8cb7456acb7bf01bd56a3add19ffb3dfec346f2a2",
"0x8c0c51e8a0483cf87c627f20b77cf0c6f182155008936c3c28da57c90231be0a",
"0x9d04f1886621a0a647cbc0d8f052a6c508034f1126ed7b7fc8b72958b4b36346",
"0x3ff9b131285125d1f77b308a815f3694e1daec878e1080007899da453a974176",
"0xb1f30c1a66a3c9c4bb84e52382e2a1ecc2be1396b00a684d9050c16f8e171607",
"0x83b6b8b220b27b4840353a4061d7f80191398b3e20b49de64be8e0c55790f1a2",
"0x98bde1ba4f0171600af9957b64653be54a6579ce5a013059d469784aed0b1180",
"0x40ea82119ec019f8fe9ad31736610a65b0b487fec3110f58715ffd157e49b1c6",
"0xfed5d04fe738797eff211fb01862b0df3e90981f6d7bd65dbd03ac7284e37b1c",
"0xfc6a8e54e13bacf86adc27cc17b7609032622bdb96caea3171cb7f0cebc47084"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

