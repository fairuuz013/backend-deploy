import { PrismaClient } from "../generated";
export class AuthRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findByEmail(email) {
        return this.prisma.user.findUnique({
            where: { email }
        });
    }
    createUser(data) {
        return this.prisma.user.create({ data });
    }
}
//# sourceMappingURL=auth.repository.js.map