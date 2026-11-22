// Scratch: print row counts for Bill, Payment, Customer and Expense.
import { prisma } from "../../lib/db";

async function main() {
  const bills = await prisma.bill.count();
  const payments = await prisma.payment.count();
  const customers = await prisma.customer.count();
  const expenses = await prisma.expense.count();

  console.log(`Bill: ${bills}`);
  console.log(`Payment: ${payments}`);
  console.log(`Customer: ${customers}`);
  console.log(`Expense: ${expenses}`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
