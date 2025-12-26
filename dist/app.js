import express, {} from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import productRouter from "./routes/product.route.js";
import categoryRouter from "./routes/category.route.js";
import orderRouter from "./routes/order.route.js";
import orderItemRouter from "./routes/orderItem.route.js";
import authRouter from "./routes/auth.route.js";
import profileRoute from "./routes/profile.route.js";
import { errorHandler } from "./middleware/error.handler.js";
import { successResponse } from "./utils/response.js";
import swaggerSpec from "./utils/swagger.js";
import swaggerUi from "swagger-ui-express";
const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.set("query parser", "extended");
app.use(express.static("public"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// 1
app.get("/", (_req, res) => {
    res.redirect("/api-docs");
});
app.get("/", (_req, res) => {
    successResponse(res, "Selamat datang di API E-Commerce", {
        hari: 4,
        status: "Server Hidup"
    });
});
app.use("/profiles", profileRoute);
app.use("/api/auth", authRouter);
app.use("/api/ordersItem", orderItemRouter);
app.use("/api/orders", orderRouter);
app.use("/api/category", categoryRouter);
app.use("/api/products", productRouter);
// 9
app.get(/.*/, (req, _res) => {
    throw new Error(`Route ${req.originalUrl} Tidak ada api E-Commerce`);
});
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map
