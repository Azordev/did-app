import { ShoppingCartProduct } from './concatProductsAndQuantity';

interface GetWhatsappLinkProps {
  phone: string;
  message: string;
}

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

export const getInvoiceText = (shoppingCartProducts: ShoppingCartProduct[]) => {
  let allProductsTotal = 0;

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

  invoice += '\n----------------\n';
  invoice += `\nTotal: ${allProductsTotal}`;

  return invoice;
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
