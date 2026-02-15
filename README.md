This is a pretty simple javascript (and might migrate to C).

List of things to make, not in any order:
1. Cryptographic operations:
1a) AES 256 in ECB, CBC, Counter modes
1b) SHA1 and SHA256
1c) ECC, specifically just P256
1d) OATH HOTP, TOTP
2. Large number
3. Assorted utiltiies
3a) Hex to val
3b) Byte order swapper
3c) LFSR PRNG (linear feedback shift register, psudeo random number generator)
3d) Huffman encoding
3e) RLE (Run length encoding)
4. File IO
4a) Image output (BMP)
4b) zip file generation

Performance tests in browser, just to see it do the thing, especially for AES, might do some "statistical randomness" for AES vs LSFR output
