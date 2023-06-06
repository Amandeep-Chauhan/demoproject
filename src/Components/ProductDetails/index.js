import { useRouter } from '@/temp/next';

import StoreCard from '../Main/StoreCard';

import styles from './styles.module.css';
import ProductInfo from './ProductInfo';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function ProductDetails() {
	const { query } = useRouter();
	const { product_code_id } = query;


	function handleClick(event) {
		event.preventDefault();
		console.info('You clicked a breadcrumb.');
	}

	const breadcrumbs = [
		<Link underline="hover" key="1" color="inherit" href="/category" onClick={handleClick}>
		  Category
		</Link>,
		<Typography key="3" color="text.primary">
			Product name
		</Typography>,
	  ];

	return (
		<>
			<div className={styles.container}>
				<Stack spacing={2}>
					<Breadcrumbs
						separator={<NavigateNextIcon fontSize="small" />}
						aria-label="breadcrumb"
					>
						{breadcrumbs}
					</Breadcrumbs>
				</Stack>			

				<ProductInfo
					productCodeId={product_code_id}
					option={option}
					loading={loading}
					createCogostoreCartItem={createCogostoreCartItem}
					productCode={product_code}
					cogopoints={cogopoints}
					addToCard={addToCard}
				/>


				<Accordion>
					<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					>
					<Typography>Accordion 1</Typography>
					</AccordionSummary>
					<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
					>
					<Typography>Accordion 2</Typography>
					</AccordionSummary>
					<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
					</AccordionDetails>
				</Accordion>

				<div className={styles.voucher}>
					<div className={styles.label}>
						product_details_vouchers
					</div>
					<div className={styles.like_vouchers}>
						{list.map((item) => (
							<StoreCard key={item?.id} item={item} isProductPage />
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductDetails;
