This is a pretty simple javascript (and might migrate to C).

Link to "live tool doing the things": https://noname-rt1d34.github.io/javascript_utilities_I_use_frequently/

Going to use the convention "JIMS_" to differentiate this lib from other libs

List of things to make, not in any order:<br>
1. Cryptographic operations:<br>
1a) AES 256 in ECB, CBC, Counter modes<br>
1b) SHA1 and SHA256<br>
1c) ECC, specifically just P256<br>
1d) OATH HOTP, TOTP<br>
2. Large number<br>
3. Assorted utiltiies<br>
3a) Hex to val, maybe base64 and base32<br>
3b) Byte order swapper<br>
3c) LFSR PRNG (linear feedback shift register, psudeo random number generator)<br>
3d) Huffman encoding<br>
3e) RLE (Run length encoding)<br>
4. File IO<br>
4a) Image output (BMP)<br>
4b) zip file generation<br>
<br>
Performance tests in browser, just to see it do the thing, especially for AES, might do some "statistical randomness" for AES vs LSFR output
