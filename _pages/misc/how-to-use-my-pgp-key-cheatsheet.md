---
layout: default 
title: How to use my PGP key (cheatsheet)
permalink: /how-to-use-my-pgp-key-cheatsheet
includelink: true
---

Quick cheatsheet on how to 
encrypt or verify a message to/from me.

- Import the public key
```
curl https://marcofavorito.me/assets/public_pgp.txt | gpg --import
# or
# curl https://keybase.io/marcofavorito/pgp_keys.asc | gpg --import
```

- Encrypt a message:
```
echo "A saucerful of secrets" > message.txt
gpg --output message.txt.gpg --encrypt --recipient marco.favorito@gmail.com message.txt
```

- Sign message:
```
shasum -a 256 | awk '{print $1}' > message.txt.sha256sum
gpg --output message.txt.sha256sum.sig --sign message.txt.sha256sum
```

- Decrypt message
```
gpg --output message.txt --decrypt message.txt.gpg
```

- Verify signature
```
gpg --verify message.txt.sha256sum.sig
# or 
# gpg --output message.txt.sha256sum  --decrypt message.txt.sha256sum.sig
```

Other useful commands.
- To know your keys:
```
gpg --list-secret-keys --keyid-format LONG
```
- To export the public key:
```
gpg --armor --export <key-id> # e.g. D7E224F...
```
