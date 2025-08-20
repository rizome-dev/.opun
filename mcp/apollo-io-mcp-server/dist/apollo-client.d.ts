export interface PeopleEnrichmentQuery {
    first_name?: string;
    last_name?: string;
    email?: string;
    domain?: string;
    organization_name?: string;
    [key: string]: any;
}
export interface OrganizationEnrichmentQuery {
    domain?: string;
    name?: string;
    [key: string]: any;
}
export interface PeopleSearchQuery {
    q_organization_domains_list?: string[];
    person_titles?: string[];
    person_seniorities?: string[];
    [key: string]: any;
}
export interface OrganizationSearchQuery {
    q_organization_domains_list?: string[];
    organization_locations?: string[];
    [key: string]: any;
}
export interface EmployeesOfCompanyQuery {
    company: string;
    website_url?: string;
    linkedin_url?: string;
    [key: string]: any;
}
export declare class ApolloClient {
    private apiKey;
    private baseUrl;
    private headers;
    private axiosInstance;
    constructor(apiKey?: string);
    /**
     * Use the People Enrichment endpoint to enrich data for 1 person.
     * https://docs.apollo.io/reference/people-enrichment
     */
    peopleEnrichment(query: PeopleEnrichmentQuery): Promise<any>;
    /**
     * Use the Organization Enrichment endpoint to enrich data for 1 company.
     * https://docs.apollo.io/reference/organization-enrichment
     */
    organizationEnrichment(query: OrganizationEnrichmentQuery): Promise<any>;
    /**
     * Use the People Search endpoint to find people.
     * https://docs.apollo.io/reference/people-search
     */
    peopleSearch(query: PeopleSearchQuery): Promise<any>;
    /**
     * Use the Organization Search endpoint to find organizations.
     * https://docs.apollo.io/reference/organization-search
     */
    organizationSearch(query: OrganizationSearchQuery): Promise<any>;
    /**
     * Use the Organization Job Postings endpoint to find job postings for a specific organization.
     * https://docs.apollo.io/reference/organization-jobs-postings
     */
    organizationJobPostings(organizationId: string): Promise<any>;
    /**
     * Get email address for a person using their Apollo ID
     */
    getPersonEmail(apolloId: string): Promise<any>;
    /**
     * Find employees of a company using company name or website/LinkedIn URL
     */
    employeesOfCompany(query: EmployeesOfCompanyQuery): Promise<any>;
}
