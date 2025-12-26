declare const router: import("express-serve-static-core").Router;
/**
 * @swagger
 * /category/find/complex:
 *   get:
 *     summary: Cari category berdasarkan nama atau harga product
 *     tags: [Category]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *           example: makanan
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: number
 *           example: 10000
 *     responses:
 *       200:
 *         description: Categories kompleks berhasil diambil
 *       400:
 *         description: Minimal salah satu parameter harus diisi
 */
export default router;
//# sourceMappingURL=category.route.d.ts.map