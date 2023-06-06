import getProductDetails from '../../helpers/getProductDetails';
import styles from './styles.module.css';
import ProductInfo from './ProductInfo';

import { productData } from '../../configs/product-data'
// import { productList } from '../../configs/product-list'



import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useParams } from "react-router-dom"


function ProductDetails() {
	const  params = useParams();

	const  product_code_id = params?.id || '42c302f5-fcac-4a63-a929-95137ec33c8a';

	// const { list = [] } = productList || {};

	const {
		cogopoints = 0,
		product_code = {},
		tnc: tncArray = [],
		redeem_steps = [],
		category = {},
		brand = {},
		user_purchase_limit = 0,
	} = productData || {};

	const { display_name } = category;
	const { name } = brand;

	const { option, tncCollapse } = getProductDetails({
		user_purchase_limit,
		tncArray,
		redeem_steps,
	});

	return (
		<>
			<div className={styles.container}>
				<Breadcrumbs aria-label="breadcrumb">
					<Link
					underline="hover"
					color="inherit"
					href="/category"
					>
						{display_name}
					</Link>
					<Typography color="text.primary">{name}</Typography>
				</Breadcrumbs>

				<ProductInfo
					productCodeId={product_code_id}
					option={option}
					productCode={product_code}
					cogopoints={cogopoints}
				/>

				<div className={styles.accordion}>
					{tncCollapse.map((item) => (
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<PlayArrowIcon />
								<Typography>{item?.title}</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									{item.children}
								</Typography>
							</AccordionDetails>
						</Accordion>
					))}
				</div>

				{/* <div className={styles.voucher}>
					<div className={styles.label}>
							cogoStore:product_details_vouchers
					</div>
					<div className={styles.like_vouchers}>
						{list.map((item) => (
							<StoreCard key={item?.id} item={item} isProductPage />
						))}
					</div> 
				</div>*/}
			</div>
		</>
	);
}

export default ProductDetails;
