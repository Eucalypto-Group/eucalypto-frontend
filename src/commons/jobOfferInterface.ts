export interface JobOfferInterface {
  id?: string;
  fulltime?: string;
  company?: string;
  job?: string;
  location?: string;
  remote?: boolean;
  description?: string;
  salary?: string;
  categories?: Array<string>;
  deadLine?: string;
  technologies?: Array<{
    id: string;
    name: string;
    value: string | number;
  }>;
  published?: boolean;

  applicants?: Array<string> | undefined;
  updatedAt?: Date;
  createdAt?: Date;
}
