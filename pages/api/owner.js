import VCard from "vcard-creator";
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;
  const userAgent = req.headers["user-agent"];
  const platform = req.headers["sec-ch-ua-platform"];

  const client = await clientPromise;
  const db = client.db("cmdc");
  const collection = db.collection("qr-scan");

  // UPDATE COLLECTIONS DB
  await collection.insertOne({
    type: "vCard",
    timestamp: new Date(),
    platform: platform,
    userAgent: userAgent,
    ip: ip,
  });

  const myVCard = new VCard();

  myVCard
    .addName("Pascale", "Samuel", "", "", "")
    .addCompany("cmdc")
    .addJobtitle("Full Stack Engineer")
    .addRole("Founder")
    .addEmail("samuelpascale03@gmail.com", "PREF;HOME")
    .addEmail("cmdc.business@gmail.com", "WORK")
    .addPhoneNumber(3891783296, "PREF;WORK")
    .addAddress("", "", "", "Potenza", "PZ", "85100", "Italy", "WORK")
    .addURL("http://cmdc.it")
    .addPhotoURL("http://cmdc.it/img/1666533063078.jpeg");

  res.setHeader("Content-Type", 'text/vcard; name="cmdc.vcf"');
  res.setHeader("Content-Disposition", 'inline; filename="cmdc.vcf"');

  //res.status(200).json({ name: "Samuel" });
  res.status(200).send(myVCard.toString());
}
