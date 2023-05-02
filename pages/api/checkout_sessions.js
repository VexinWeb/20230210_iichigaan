const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const cartItems = req.body; // Le panier Redux doit être envoyé dans le corps de la requête

		// Créez des objets de ligne d'articles pour chaque produit du panier
		const line_items = cartItems.map((item) => ({
			price_data: {
				currency: 'eur',
				product_data: {
					name: item.title,
				},
				unit_amount: item.price * 100, // Convertir le prix en centimes
			},
			quantity: item.quantity,
		}));

		try {
			// Créez la session Stripe avec les objets de ligne d'articles
			const session = await stripe.checkout.sessions.create({
				line_items,
				payment_method_types: ['card'], //Paypal pas possible pour le moment
				mode: 'payment',
				success_url: `${req.headers.origin}/confirmation?success=true`,
				cancel_url: `${req.headers.origin}/paymentFailed?canceled=true`,
			});
			res.status(200).json({ sessionId: session.id });
		} catch (err) {
			res.status(err.statusCode || 500).json(err.message);
		}
	} else {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method Not Allowed');
	}
}
