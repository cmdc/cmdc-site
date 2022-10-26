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
        <div style={{ overflow: "hidden" }}>
          <table style={{ minWidth: "100%", tableLayout: "fixed" }}>
            <thead>
              <tr>
                <th scope="col" style={{ padding: "1rem" }}>
                  N.
                </th>
                <th
                  scope="col"
                  style={{
                    paddingTop: "0.75rem",
                    paddingBottom: "0.75rem",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    fontSize: "0.75",
                    lineHeight: "1rem",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    textAlign: "left",
                    textTransform: "uppercase",
                  }}
                >
                  Type
                </th>
                <th
                  scope="col"
                  style={{
                    paddingTop: "0.75rem",
                    paddingBottom: "0.75rem",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    fontSize: "0.75",
                    lineHeight: "1rem",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    textAlign: "left",
                    textTransform: "uppercase",
                  }}
                >
                  Timestamp
                </th>
                <th
                  scope="col"
                  style={{
                    paddingTop: "0.75rem",
                    paddingBottom: "0.75rem",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    fontSize: "0.75",
                    lineHeight: "1rem",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    textAlign: "left",
                    textTransform: "uppercase",
                  }}
                >
                  Platform
                </th>
                <th
                  scope="col"
                  style={{
                    paddingTop: "0.75rem",
                    paddingBottom: "0.75rem",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    fontSize: "0.75",
                    lineHeight: "1rem",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    textAlign: "left",
                    textTransform: "uppercase",
                  }}
                >
                  Ip
                </th>
                <th
                  scope="col"
                  style={{
                    paddingTop: "0.75rem",
                    paddingBottom: "0.75rem",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    fontSize: "0.75",
                    lineHeight: "1rem",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    textAlign: "left",
                    textTransform: "uppercase",
                  }}
                >
                  UserAgent
                </th>
              </tr>
            </thead>
            <tbody>
              {lasts.length > 0 &&
                lasts.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td
                        style={{
                          padding: "1rem",
                          width: "1rem",
                        }}
                      >
                        {index + 1}
                      </td>
                      <td
                        style={{
                          paddingTop: "1rem",
                          paddingBottom: "1rem",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          fontSize: "0.875",
                          lineHeight: "1.25rem",
                          fontWeight: 500,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item?.type}
                      </td>
                      <td
                        style={{
                          paddingTop: "1rem",
                          paddingBottom: "1rem",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          fontSize: "0.875",
                          lineHeight: "1.25rem",
                          fontWeight: 500,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {new Date(item?.timestamp).toLocaleString()}
                      </td>
                      <td
                        style={{
                          paddingTop: "1rem",
                          paddingBottom: "1rem",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          fontSize: "0.875",
                          lineHeight: "1.25rem",
                          fontWeight: 500,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item?.platform}
                      </td>
                      <td
                        style={{
                          paddingTop: "1rem",
                          paddingBottom: "1rem",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          fontSize: "0.875",
                          lineHeight: "1.25rem",
                          fontWeight: 500,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item?.ip}
                      </td>
                      <td
                        style={{
                          paddingTop: "1rem",
                          paddingBottom: "1rem",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          fontSize: "0.875",
                          lineHeight: "1.25rem",
                          fontWeight: 500,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item?.userAgent}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
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
      .sort({ timestamp: -1 })
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
      type: "classic",
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
