import Stripe from 'stripe';

export interface IPaymentClient {
    createCheckoutSession(items: any[], userId: string): Promise<string | null>; 
    handleWebhook (payload: string, signature: string): Promise<object>;
}

export class StripeClient implements IPaymentClient {
    private stripe: Stripe;

    constructor(apiKey?: string) {
        const key = apiKey || process.env.STRIPE_SECRET_KEY;

        if (!key) {
            throw new Error("Stripe API key (STRIPE_SECRET_KEY) is not defined. Check .env file in root directory.")
        }

        this.stripe = new Stripe(key, {
            apiVersion: '2025-10-29.clover',
        });
    }

    async createCheckoutSession(items: any[], userId: string): Promise<string | null> {
        console.log('Creating session for user ${userId}');
        return 'session_id_placeholder';
    }
    
    async handleWebhook (payload: string, signature: string): Promise<object> {
        // nothing to see here yet
        return{};
    }
}