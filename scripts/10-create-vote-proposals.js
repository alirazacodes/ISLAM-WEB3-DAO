import sdk from "./1-initialize-sdk.js";
import { ethers } from "ethers";

(async () => {
  //   try {
  //     // This is our governance contract.
  //     const vote = await sdk.getContract(
  //       "0x616e9D54EB85074D3e4620E0970Ceb59253C62F9",
  //       "vote"
  //     );
  //     // This is our ERC-20 contract.
  //     const token = await sdk.getContract(
  //       "0x67e5856C9752Bba0247f465159E292b959518B80",
  //       "token"
  //     );
  //     // Create proposal to mint 420,000 new token to the treasury.
  //     const amount = 420_000;
  //     const description =
  //       "Should the DAO mint an additional " +
  //       amount +
  //       " tokens into the treasury?";
  //     const executions = [
  //       {
  //         // Our token contract that actually executes the mint.
  //         toAddress: token.getAddress(),
  //         // Our nativeToken is ETH. nativeTokenValue is the amount of ETH we want
  //         // to send in this proposal. In this case, we're sending 0 ETH.
  //         // We're just minting new tokens to the treasury. So, set to 0.
  //         nativeTokenValue: 0,
  //         // We're doing a mint! And, we're minting to the vote, which is
  //         // acting as our treasury.
  //         // in this case, we need to use ethers.js to convert the amount
  //         // to the correct format. This is because the amount it requires is in wei.
  //         transactionData: token.encoder.encode("mintTo", [
  //           vote.getAddress(),
  //           ethers.utils.parseUnits(amount.toString(), 18),
  //         ]),
  //       },
  //     ];

  //     await vote.propose(description, executions);

  //     console.log("✅ Successfully created proposal to mint tokens");
  //   } catch (error) {
  //     console.error("failed to create first proposal", error);
  //     process.exit(1);
  //   }

  //   try {
  //     // This is our governance contract.
  //     const vote = await sdk.getContract(
  //       "0x616e9D54EB85074D3e4620E0970Ceb59253C62F9",
  //       "vote"
  //     );
  //     // This is our ERC-20 contract.
  //     const token = await sdk.getContract(
  //       "0x67e5856C9752Bba0247f465159E292b959518B80",
  //       "token"
  //     );
  //     // Create proposal to transfer ourselves 6,900 tokens for being awesome.
  //     const amount = 6_900;
  //     const description =
  //       "Should the DAO transfer " +
  //       amount +
  //       " tokens from the treasury to " +
  //       process.env.WALLET_ADDRESS +
  //       " for the work done?";
  //     const executions = [
  //       {
  //         // Again, we're sending ourselves 0 ETH. Just sending our own token.
  //         nativeTokenValue: 0,
  //         transactionData: token.encoder.encode(
  //           // We're doing a transfer from the treasury to our wallet.
  //           "transfer",
  //           [
  //             process.env.WALLET_ADDRESS,
  //             ethers.utils.parseUnits(amount.toString(), 18),
  //           ]
  //         ),
  //         toAddress: token.getAddress(),
  //       },
  //     ];

  //     await vote.propose(description, executions);

  //     console.log(
  //       "✅ Successfully created proposal to reward ourselves from the treasury, let's hope people vote for it!"
  //     );
  //   } catch (error) {
  //     console.error("failed to create second proposal", error);
  //   }

  try {
    // This is our governance contract.
    const vote = await sdk.getContract(
      "0x616e9D54EB85074D3e4620E0970Ceb59253C62F9",
      "vote"
    );
    // This is our ERC-20 contract.
    const token = await sdk.getContract(
      "0x67e5856C9752Bba0247f465159E292b959518B80",
      "token"
    );
    // Create proposal to transfer ourselves 6,900 tokens for being awesome.
    const amount = 400;
    const description =
      "Should the DAO pass the law for exterminating interest from the banking and other financial system with " +
      amount +
      "? If yes then pay" +
      process.env.WALLET_ADDRESS +
      " for the work done.";
    const executions = [
      {
        // Again, we're sending ourselves 0 ETH. Just sending our own token.
        nativeTokenValue: 0,
        transactionData: token.encoder.encode(
          // We're doing a transfer from the treasury to our wallet.
          "transfer",
          [
            process.env.WALLET_ADDRESS,
            ethers.utils.parseUnits(amount.toString(), 18),
          ]
        ),
        toAddress: token.getAddress(),
      },
    ];

    await vote.propose(description, executions);

    console.log(
      "✅ Successfully created proposal to reward ourselves from the treasury, let's hope people vote for it!"
    );
  } catch (error) {
    console.error("failed to create second proposal", error);
  }
})();
