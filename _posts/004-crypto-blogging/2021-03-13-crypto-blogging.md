---
layout: post_page
comments: true
title:  "Crypto-Blogging"
description: "OpenTimestamps, IPFS, and NFTs for the blockchain era of blogging."
image: /assets/posts/crypto-blogging/crypto.jpg
date:   2021-04-05 16:00:00 UTC
authors:
  - name: Marco Favorito
    url: https://marcofavorito.me
bibliography: crypto-blogging.bib
identifier: crypto-blogging
canonical_url: 'https://marcofavorito.me/blog/crypto-blogging'
nft_url: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/27798962552534080114972654858550532991370133186513724228847828029296905027585"
has_pdf: true
---

Since the end of 2020, the cryptocurrency market has gained, 
once again, mainstream attention.
[All-time high prices for Bitcoin and Ethereum](https://cryptorank.io/ath),
[recognition of Decentralized Finance systems (DeFi)](https://www.forbes.com/sites/philippsandner/2021/02/22/decentralized-finance-will-change-your-understanding-of-financial-systems/),
[rise of Non-Fungible Tokens (NFTs)](https://www.theguardian.com/technology/2021/mar/12/non-fungible-tokens-revolutionising-art-world-theft),
and [more institutional investors jumping in the cryptocurrency market](More Institutional Investors Jumping Into Bitcoin Leaves Less to Go Around, Data Shows)
are some of the traits of the new cryptomania wave.

In this post, I will try to adopt some of the applications
of these technologies, with the eyes of a researcher and (when I have time :cry:) a blogger.

## Blogpost Timestamping

A known application of blockchain-based Distributed Ledger Technologies
is _trusted digital timestamping_ <d-cite key="Haber91howto">trusted digital timestamping</d-cite> [@Haber91howto].
Previously, there were several timestamping schemes and standards <d-cite key="adams2001internet,ansi2016x9,ISOtimestamping,Massias99designof"></d-cite>,
but they had to rely on a trusted third party Timestamping Authority (TSA)
for the issuing of the timestamp.
With the advent of the Bitcoin system, it is possible to
use it as a decentralized 
timestamping mechanism not only for transactions but also for arbitrary
data, as if it acted as a _notary_ <d-cite key="gipp2015decentralized"></d-cite>.

[OpenTimestamps](https://opentimestamps.org/) is an 
open-source project that implements this idea.
In particular, it uses Bitcoin block headers as time attestations: 
proof that a notary that we trust attested to the fact that some data existed at some point in time.

For bloggers, a timestamp of their blogposts would be useful to prove that
the post was not created after the date that the timestamper certifies.
For example, this post is timestamped using OpenTimestamps.
The timestamp is produced against the [PDF version](crypto-blogging.pdf) of the post.
The links to the PDF version and the timestamp file are reported in the header of the post.
Anyone can verify the correctness of the timestamp either
by using the CLI tool [`ots verify`](https://github.com/opentimestamps/opentimestamps-client#usage), 
or by relying on a third-party service like [this](https://dgi.io/ots/).
I will try to keep this habit in the next posts.

As a reseracher, one could also timestamp PDF versions of his publications;
however, it is less necessary as the published papers are already disseminated 
on the web by trustworthy (but centralized) aggregators, publishers, and search engines,
e.g. Google Scholar, DBLP, ArXiv etc.

## IPFS

The [InterPlanetary File System](https://ipfs.io/) (IPFS)
is a peer-to-peer distributed file system that seeks to connect 
all computing devices with the same system of files <d-cite key="benet2014ipfs"></d-cite>.
It is arguably one of the most interesting project of the decentralized web.

An entire website could be easily hosted
on the IPFS network, like [Juan Benet's website](https://juan.benet.ai/),
the creator of IPFS. All is needed is to 
either run a local IPFS node on your machine, or to rely on
[remote pinning services](https://docs.ipfs.io/how-to/work-with-pinning-services/),
like [Pinata](https://pinata.cloud/),
to improve the availability of your files.
At the moment, I have only uploaded some of my documents
(see the IPFS links in [publications page](/papers)),
but eventually I will run the entire website on IPFS,
so to not rely on any third-party services.

## Unstoppable Domains

[Unstoppable Domains](https://unstoppabledomains.com/)
is a company building blockchain-based domains
to replace cryptocurrency addresses with human-readable names.
Being decentralized, such domains are inherently unstoppable
(as long as the Ethereum blockchain and the transport
layer it builds on are operational),
and the sole owner is the owner of the private key 
associated with the domain.
The system works thanks to the Crypto Name Service (CNS)
built on Ethereum, and consists of a bundle of smart contracts.
See the [architecture documentation page](https://docs.unstoppabledomains.com/domain-registry-essentials/architecture-overview)
 for more details.

I set up my Unstoppable Domain [marcofavorito.crypto](https://marcofavorito.crypto)
that currently redirects to [marcofavorito.me](https://marcofavorito.me)
(see transaction [here](https://etherscan.io/tx/0x56b0b5bcd81785be6735b2b53341499dce0a005c2bd1e24a007c6d89244e7e6c#eventlog)), 
hosted on GitHub Pages.
I also have associated to it my [email address](https://etherscan.io/tx/0xe2356a5460382557e42f39413affa4da7a153879fb515ef0323873f02d822747/advanced#eventlog),
and my [BTC and ETH addresses](https://etherscan.io/tx/0x138299fb55f425d3ccb7a4281f16d46b5f606eecb114299ab486ffb0ab9287f0#eventlog).

An easy way to navigate in the decentralized web is by means of
[this browser extension](https://unstoppabledomains.com/extension).
If I had deployed the website on IPFS, I could have set up a redirection
from my crypto-domain to the IPFS address of the website.

## Blogposts as NFTs

Non-Fungible Tokens (NFT),
proposed in ERC-721 <d-cite key="entriken2018eip"></d-cite> 
are tokens minted on blockchain that are unique.
An NFT is not like any other one, differently
from ERC-20 tokens, which are fungible.
This makes them particularily apt to
represent ownership of digital assets.
NFTs are now used by crypto artists
(e.g. see [artist Beeple's _Everydays: the First 5000 Days_ sold
as NFT for $69m](https://foreignpolicy.com/2021/03/19/nft-beeple-69-million-art-crypto-nonfungible-token/)), 
blockchain games, and several other uses to ensure digital scarcity and ownership.
The Unstoppable Domain above is indeed an NFT.
Usually, an NFT is minted on-chain and the data linked to it is stored
off-chain in a content-addressed data storage such as IPFS.

This post is associated to [this NFT](https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/27798962552534080114972654858550532991370133186513724228847828029296905027585),
that represents the ownership of this post.
Who knows, it could be the next Beeple's _Everydays_!

## Conclusions

As a technology at its early stages,
when it comes to applications of blockchain systems, the sky's the limit. 
In this post, I wanted to play with several crypto-based
services and see how they could be used for blogging.

Among other ideas not explored in this post, there are:

- [Tokenize yourself](https://newsletter.banklesshq.com/p/how-to-tokenize-yourself-full) as a professional/researcher/blogger.
  That is, make the token to represent something, material or immaterial, that you have or you can provide. For example,
  your working hours can be tokenized and then sold to people who'd like you to work for them, or to write the next blogpost :slightly_smiling_face:.
  The token can be provided on DeFi exchanges like [Uniswap](https://uniswap.org/).
- NFTs can be a way to [post anonymously](https://www.seanblanda.com/nft-for-writers/) and still receive compensation for the work.
- NFTs allow for [crowfunding writing](https://dev.mirror.xyz/llJ_AboiDJwB_ZAFz-CXU7fL2p8v5Wz6MjfluLafewQ) in which 
  an author can be supported in advance by contributors that in turn receive equity ownership from the writer's work;
  everything coordinated by a smart contract in a trustless setting.


