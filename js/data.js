// Mock Dataset and Default Initial State

const initialRevenueData = [
  { month: "Jan", revenue: 4200, expenses: 2100 },
  { month: "Feb", revenue: 5800, expenses: 2800 },
  { month: "Mar", revenue: 3900, expenses: 1900 },
  { month: "Apr", revenue: 7100, expenses: 3200 },
  { month: "May", revenue: 6400, expenses: 2900 },
  { month: "Jun", revenue: 8300, expenses: 3600 },
  { month: "Jul", revenue: 9500, expenses: 4100 },
];

const initialSalesData = [
  { category: "Electronics", sales: 145 },
  { category: "Clothing", sales: 92 },
  { category: "Books", sales: 68 },
  { category: "Home & Garden", sales: 54 },
  { category: "Sports", sales: 88 },
];

const initialActivities = [
  { id: 1, user: "Leanne Graham", action: "Purchased Enterprise License", time: "10 mins ago", status: "completed" },
  { id: 2, user: "Ervin Howell", action: "Updated Profile Settings", time: "25 mins ago", status: "info" },
  { id: 3, user: "Clementine Bauch", action: "Submitted support ticket #402", time: "1 hour ago", status: "pending" },
  { id: 4, user: "Patricia Lebsack", action: "Renewed annual subscription", time: "3 hours ago", status: "completed" },
];

const fallbackUsers = [
  { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", phone: "1-770-736-8031", company: { name: "Romaguera-Crona" }, status: "Active" },
  { id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", phone: "010-692-6593", company: { name: "Deckow-Crist" }, status: "Active" },
  { id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", phone: "1-463-123-4447", company: { name: "Romaguera-Jacobson" }, status: "Pending" },
  { id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org", phone: "493-170-9623", company: { name: "Kale-Deckow" }, status: "Active" },
  { id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca", phone: "(254)954-1289", company: { name: "Keebler LLC" }, status: "Inactive" },
];
