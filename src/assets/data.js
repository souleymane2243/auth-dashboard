import { Copy, CheckSquare, DollarSign, CreditCard } from "lucide-react";

export const stats = [
  { id: 1, label: "Orders", value: "201", change: "+8.2%", changeType: "up", icon: Copy },
  { id: 2, label: "Approved", value: "36", change: "+3.4%", changeType: "up", icon: CheckSquare },
  { id: 3, label: "Month total", value: "25410", change: "-0.2%", changeType: "down", icon: DollarSign },
  { id: 4, label: "Revenue", value: "1352", change: "-1.2%", changeType: "down", icon: CreditCard },
];

export const usersData = {
  label: "Users",
  value: "4.890",
  subtitle: "since last month",
  segments: [
    { name: "New", percent: 62, color: "#f5b100" },
    { name: "Returnung", percent: 26, color: "#fcd34d" },
    { name: "Inactive", percent: 12, color: "#fef3c7" },
  ],
};

export const subscriptionsData = {
  label: "Subscriptions",
  value: "1.201",
  subtitle: "since last month",
  segments: [
    { name: "Paid", percent: 70, color: "#2563eb" },
    { name: "Trial", percent: 30, color: "#93c5fd" },
  ],
};