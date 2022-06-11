# private-ethereum-network
simple Ethereum network, generate token, send token, balance token
private ETH 를 이용하여 만든 블록체인 지갑으로, 2022년 1학기 소프트웨어공학 수업의 과제 제출물입니다.

## Install
### 1. Clone

```shell
$ git clone https://github.com/itsnowkim/private-ethereum-network.git

# change directory to wallet-front
$ cd wallet-front
```
### 2. Dependency

```shell
# npm install at wallet-front directory
$ npm i
```

## Run

### 3. Run Node

private network를 activate합니다.
`tmp.txt`에 있는 명령어를 각각의 /Node-1 , /Node-2, /Node-3 , /Node-4 directory에서 실행합니다.
[참고 링크](https://besu.hyperledger.org/en/stable/Tutorials/Private-Network/Create-IBFT-Network/#create-a-private-network-using-the-ibft-20-proof-of-authority-consensus-protocol)

### 4. Run App

```shell
# front page 실행

$ npm start
```

### 5. Run Server

```shell
# run server.js
$ cd besu_wallet_practice
$ node server.js
```

## Simulation Video

### token deploy, receipt 확인, balance로 잔액 표시
https://user-images.githubusercontent.com/46472252/173189565-4e30c696-e85e-480b-84ac-81c3cbdfd5d8.mp4

### token send, receipt 확인, balance로 잔액 표시
https://user-images.githubusercontent.com/46472252/173189590-47548a20-eb6c-46a9-ad3b-351b01a6f240.mp4



