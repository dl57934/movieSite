import mongoose from "mongoose";

const DB_URL = "mongodb://localhost:27017/local";

const ConnectDB = () => {
  mongoose.connect(DB_URL);
  const database = mongoose.connection;
  database.on("error", error => console.log(error));
  database.on("open", () =>
    console.log(`데이터베이스가 연결 되었습니다.${DB_URL}`)
  );
};

export default ConnectDB;
