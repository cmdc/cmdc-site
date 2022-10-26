import VCard from "vcard-creator";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // Define a new vCard
  const myVCard = new VCard();

  // Some variables
  const lastname = "Pascale";
  const firstname = "Samuel";
  const additional = "";
  const prefix = "";
  const suffix = "";

  myVCard
    // Add personal data
    .addName(lastname, firstname, additional, prefix, suffix)
    // Add work data
    .addCompany("cmdc")
    .addJobtitle("Full Stack Engineer")
    .addRole("Founder")
    .addEmail("samuelpascale03@gmail.com", "PREF;HOME")
    .addEmail("cmdc.business@gmail.com", "WORK")
    .addPhoneNumber(3891783296, "PREF;WORK")
    .addAddress("", "", "", "Potenza", "PZ", "85100", "Italy", "WORK")
    .addURL("http://cmdc.it");

  //res.status(200).json({ name: "Samuel" });

  res.setHeader("Content-Type", 'text/vcard; name="cmdc.vcf"');
  res.setHeader("Content-Disposition", 'inline; filename="cmdc.vcf"');

  res.status(200).send(myVCard.toString());
}
