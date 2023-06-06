import Button from '@mui/material/Button';

import CartItems from './CartItems';
import OrderSummary from './OrderSummary';
import styles from './styles.module.css';

import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

function Cart() {
	const cart_products = [];
	
	const renderComponent = () => {

		return (
			<div className={styles.cart_order}>
				<div className={styles.contact_info}>
					<h2>
						{cart_products.length} items in your cart
					</h2>
					{cart_products.map((cartInfo) => (
						<CartItems
							key={cartInfo?.id}
							cartInfo={cartInfo}
						/>
					))}
				</div>
				<div className={styles.order_summary}>
					<div className={styles.sticky}>
						<div className={styles.order_col}>
							<h2>Cart Order Summary</h2>
							<div className={styles.summary}>
								{cart_products.map((cartSummary) => (
									<OrderSummary
										key={cartSummary?.id}
										cartSummary={cartSummary}
									/>
								))}
							</div>

							<div className={styles.total_order}>
								<div className={styles.total_text}>
									Cart Total
								</div>
								<div className={styles.total_order_value}>
									<MonetizationOnIcon width={25} height={25} />
									<div className={styles.order_price}>10000</div>
								</div>
							</div>
						</div>

						<Button
							size="lg"
							themeType="primary"
							style={{
								width: '100%',
							}}
						>
							Confirm order
						</Button>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className={styles.cart_page}>
			{renderComponent()}
		</div>
	);
}

export default Cart;
