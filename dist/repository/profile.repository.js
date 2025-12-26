export class ProfileRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findByUserId(userId) {
        return this.prisma.profile.findUnique({
            where: { userId },
            include: { user: true },
        });
    }
    async findById(id) {
        return this.prisma.profile.findUnique({
            where: { id },
            include: { user: true },
        });
    }
    async create(data) {
        return this.prisma.profile.create({ data });
    }
    async update(id, data) {
        return this.prisma.profile.update({
            where: { id },
            data,
        });
    }
}
//# sourceMappingURL=profile.repository.js.map