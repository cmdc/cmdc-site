import React from "react";
import Seo from "../../components/common/seo";
import clientPromise from "../../lib/mongodb";

const QR = ({ count, lasts }) => {
  return (
    <>
      <Seo />
      <div style={{ marginTop: "6rem", marginLeft: "2rem" }}>
        <p>COUNT: {count}</p>
        <br />
        <p>LAST:</p>
        {lasts.length > 0 &&
          lasts.map((item, index) => {
            return (
              <div key={index}>
                Timestamp: {item?.timestamp}, Platform: {item?.platform}, Ip:{" "}
                {item?.ip}, UserAgent: {item.userAgent}
              </div>
            );
          })}
      </div>
    </>
  );
};

export async function getServerSideProps({ req, query }) {
  const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;
  const userAgent = req.headers["user-agent"];
  const platform = req.headers["sec-ch-ua-platform"];

  const client = await clientPromise;
  const db = client.db("cmdc");
  const collection = db.collection("qr-scan");

  // MODE ADMIN
  if (query?.mode === "admin") {
    // COUNT SCAN
    const count = await collection.count();
    // LAST 20
    const lasts = await collection
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();

    return {
      props: {
        count: JSON.parse(JSON.stringify(count)),
        lasts: JSON.parse(JSON.stringify(lasts)),
      },
    };
  } else {
    // UPDATE COLLECTIONS DB
    await collection.insertOne({
      timestamp: new Date(),
      platform: platform,
      userAgent: userAgent,
      ip: ip,
    });

    // REDIRECT
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
}

export default QR;
