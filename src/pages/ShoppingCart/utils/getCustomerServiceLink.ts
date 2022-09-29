import { ShoppingCartProduct } from './concatProductsAndQuantity';
import { Provider } from 'src/utils/apollo.types';

interface GetWhatsappLinkProps {
  phone: string;
  message: string;
}

// interface Provider {
//   value: {
//     commercial_name: string;
//   };
// }

export const getWebWhatsappLink = ({
  phone,
  message,
}: GetWhatsappLinkProps) => {
  const phoneWithoutSpaces = phone.replaceAll(' ', '');
  const url = `https://wa.me/${phoneWithoutSpaces}?text=${encodeURIComponent(
    message
  )}`;
  return url;
};

export const getInvoiceText = (
  shoppingCartProducts: ShoppingCartProduct[],
  provider: string | undefined
) => {
  let allProductsTotal = 0;
  const greetings = `Hola ${
    provider || 'Proveedor'
  }, observé su tienda en la aplicación de DID y me encuentro interesado en los siguientes productos:\n\n`;
  let invoice = shoppingCartProducts.reduce((acc, { product, quantity }) => {
    const { name, base_price_sol } = product;
    const total = Number(quantity) * Number(base_price_sol);

    if (isNaN(total)) {
      const fallbackText = 'error calculando el precio para este producto';

      return `${acc}${name} = ${fallbackText}\n`;
    }

    allProductsTotal += total;

    return `${acc}${name} ${quantity}x = S/. ${total}\n`;
  }, '');

  invoice += '\n-----\n';
  invoice += `\nTotal: ${allProductsTotal}`;

  return greetings + invoice;
};

interface GetEmailLinkProps {
  email: string;
  message: string;
}

export const getEmailLink = ({ email, message }: GetEmailLinkProps) => {
  const url = `mailto:${email}?subject=${encodeURIComponent(
    'Compra en la tienda'
  )}&body=${encodeURIComponent(message)}`;
  return url;
};
