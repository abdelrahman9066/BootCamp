export interface APIUser {
  name: { first: string; last: string };
  email: string;
  phone: string;
  dob: { date: string };
  registered: { age: number };
  login: { uuid: string };
  picture: { thumbnail: string; medium: string; large: string };
  location: { street: { name: string; number?: number }; city: string; state?: string; postcode: string }; 
}

export interface TeamMember {
    id: number;
    name: string;
    position: string;
    department: string;
    email: string;
    phone: string;
    status: string;
    avatar: string;
      location: string;
      birthday: string;
      hrYears: number;
    picture: { thumbnail: string };
    
  }

export interface MemberDetails {
    location: string;
    birthday: string;
    hrYears: number;
    address?: string;
    teamMates?: string[];
  }
export interface Props {
    member: MemberDetails;
  }