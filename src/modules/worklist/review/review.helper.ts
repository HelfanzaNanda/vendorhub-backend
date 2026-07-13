export class ReviewHelper {
    static getPermissions(action: string) {
        return {
            showReviewSection: action !== 'NO_ACTION'
        };
    }
}
