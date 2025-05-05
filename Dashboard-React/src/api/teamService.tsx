import { APIUser, TeamMember } from '../types/teamTypes';

const positions = ['Frontend Developer', 'Backend Developer', 'QA Engineer', 'Content Writer', 'CEO'];
const departments = ['Engineering', 'Marketing', 'Human Resources', 'Customer Success', 'Operations'];

export const fetchTeamData = async (page: number): Promise<TeamMember[]> => {
  const response = await fetch(`https://randomuser.me/api?page=${page}&results=10`);
  const result = await response.json();

  const formattedData = result.results.map((user: APIUser) => ({
    id: user.login.uuid,
    name: `${user.name.first} ${user.name.last}`,
    avatar: user.picture.medium,
    position: positions[Math.floor(Math.random() * positions.length)],
    department: departments[Math.floor(Math.random() * departments.length)],
    email: user.email,
    phone: user.phone,
    status: Math.random() > 0.5 ? 'Full Time' : 'Part Time',
    location: `${user.location.street.number},${user.location.street.name}, ${user.location.city}, ${user.location.postcode}`,
    birthday: new Date(user.dob.date).toLocaleDateString(),
    hrYears: user.registered.age,
    address: `${user.location.street.name}, ${user.location.city}, ${user.location.postcode}`,
    teamMates: []
    
  }));

  return formattedData;
};