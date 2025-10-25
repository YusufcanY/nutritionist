export interface Plan {
  title: string;
  description: string | string[];
  monthlyPrice: string;
  yearlyPrice: string;
  extra?: string;
}
