export interface JobExperienceModel {
    Title: string,
    EmploymentType: string,
    CompanyName: string,
    Location: string,
    StartDate: Date,
    EndDate: Date | null,
    Description: string,
    Images: Array<string>
}