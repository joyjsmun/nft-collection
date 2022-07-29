// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  //get the tokenId from the query params
  const tokenId = req.query.tokenId;
  //As all the images are uploaded on github, we can extract the images from github directory
  const image_url = "https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/";
  //The api is sending back metadata for a Crypto Dev
  //To make our collection compatible with Opensea, we need to follow some Metada standards
  // when sending back the response from the api
  // More info can be found here:https://docs.opensea.io/docs/metadata-standards

  res.status(200).json({
    name:"Crypto Dev #" + tokenId,
    description: "CryptoDev is a collection of developer in Crypto",
    image: image_url + tokenId + ".svg"
  });
}