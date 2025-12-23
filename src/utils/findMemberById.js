export const findMemberById = (members, id) => {
    for (let member of members) {
        if (member.id === id) return member;

        if (member.children?.length) {
            const found = findMemberById(member.children, id);
            if (found) return found;
        }
    }
    return null;
};
