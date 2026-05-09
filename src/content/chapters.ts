export interface Chapter {
  city: string;
  country: string;
  region: string;
  coordinator: string;
  chartered: number;
  cadence: string;
}

export const chapters: ReadonlyArray<Chapter> = [
  // The Americas
  { city: 'Boston', country: 'United States', region: 'The Americas', coordinator: 'Michael O\'Halloran', chartered: 2020, cadence: 'First Wednesday' },
  { city: 'New York', country: 'United States', region: 'The Americas', coordinator: 'Michael Stein', chartered: 2020, cadence: 'Second Tuesday' },
  { city: 'Washington', country: 'United States', region: 'The Americas', coordinator: 'Michael DuBois', chartered: 2021, cadence: 'Third Thursday' },
  { city: 'Atlanta', country: 'United States', region: 'The Americas', coordinator: 'Michael Whitaker', chartered: 2022, cadence: 'Last Saturday' },
  { city: 'Chicago', country: 'United States', region: 'The Americas', coordinator: 'Michael Pekarski', chartered: 2021, cadence: 'First Monday' },
  { city: 'Austin', country: 'United States', region: 'The Americas', coordinator: 'Michael Cervantes', chartered: 2023, cadence: 'Bi-monthly' },
  { city: 'Denver', country: 'United States', region: 'The Americas', coordinator: 'Michael Lindgren', chartered: 2023, cadence: 'Second Sunday' },
  { city: 'Los Angeles', country: 'United States', region: 'The Americas', coordinator: 'Michael Park', chartered: 2021, cadence: 'Third Wednesday' },
  { city: 'San Francisco', country: 'United States', region: 'The Americas', coordinator: 'Michael Costa', chartered: 2020, cadence: 'Second Friday' },
  { city: 'Seattle', country: 'United States', region: 'The Americas', coordinator: 'Michael Hartnell', chartered: 2022, cadence: 'First Saturday' },
  { city: 'Toronto', country: 'Canada', region: 'The Americas', coordinator: 'Michael Tremblay', chartered: 2021, cadence: 'Second Wednesday' },
  { city: 'Montréal', country: 'Canada', region: 'The Americas', coordinator: 'Michel Lapierre', chartered: 2022, cadence: 'Third Tuesday' },
  { city: 'Vancouver', country: 'Canada', region: 'The Americas', coordinator: 'Michael Tang', chartered: 2023, cadence: 'Bi-monthly' },
  { city: 'Mexico City', country: 'Mexico', region: 'The Americas', coordinator: 'Miguel Salazar', chartered: 2022, cadence: 'First Sunday' },
  { city: 'Buenos Aires', country: 'Argentina', region: 'The Americas', coordinator: 'Miguel Albornoz', chartered: 2023, cadence: 'Last Friday' },
  { city: 'São Paulo', country: 'Brazil', region: 'The Americas', coordinator: 'Miguel Cardoso', chartered: 2022, cadence: 'Second Saturday' },
  { city: 'Lima', country: 'Peru', region: 'The Americas', coordinator: 'Miguel Quispe', chartered: 2024, cadence: 'Quarterly' },
  { city: 'Bogotá', country: 'Colombia', region: 'The Americas', coordinator: 'Miguel Restrepo', chartered: 2024, cadence: 'Bi-monthly' },

  // Europe
  { city: 'London', country: 'United Kingdom', region: 'Europe', coordinator: 'Michael Ashby', chartered: 2020, cadence: 'First Tuesday' },
  { city: 'Edinburgh', country: 'United Kingdom', region: 'Europe', coordinator: 'Michael Forsyth', chartered: 2021, cadence: 'Last Thursday' },
  { city: 'Dublin', country: 'Ireland', region: 'Europe', coordinator: 'Mícheál Ó Conchúir', chartered: 2021, cadence: 'Second Wednesday' },
  { city: 'Paris', country: 'France', region: 'Europe', coordinator: 'Michel Aubert', chartered: 2021, cadence: 'Third Thursday' },
  { city: 'Lyon', country: 'France', region: 'Europe', coordinator: 'Michel Roche', chartered: 2024, cadence: 'Quarterly' },
  { city: 'Berlin', country: 'Germany', region: 'Europe', coordinator: 'Michael Hoffmann', chartered: 2021, cadence: 'First Friday' },
  { city: 'Munich', country: 'Germany', region: 'Europe', coordinator: 'Michael Brunner', chartered: 2023, cadence: 'Bi-monthly' },
  { city: 'Vienna', country: 'Austria', region: 'Europe', coordinator: 'Michael Zechner', chartered: 2022, cadence: 'Second Monday' },
  { city: 'Zürich', country: 'Switzerland', region: 'Europe', coordinator: 'Michael Egli', chartered: 2022, cadence: 'Third Sunday' },
  { city: 'Amsterdam', country: 'Netherlands', region: 'Europe', coordinator: 'Michiel van der Meer', chartered: 2021, cadence: 'First Wednesday' },
  { city: 'Brussels', country: 'Belgium', region: 'Europe', coordinator: 'Michel Vandermeulen', chartered: 2023, cadence: 'Quarterly' },
  { city: 'Copenhagen', country: 'Denmark', region: 'Europe', coordinator: 'Mikkel Sørensen', chartered: 2022, cadence: 'Last Tuesday' },
  { city: 'Stockholm', country: 'Sweden', region: 'Europe', coordinator: 'Mikael Lindqvist', chartered: 2022, cadence: 'Second Thursday' },
  { city: 'Oslo', country: 'Norway', region: 'Europe', coordinator: 'Mikael Berg', chartered: 2023, cadence: 'Bi-monthly' },
  { city: 'Helsinki', country: 'Finland', region: 'Europe', coordinator: 'Mikael Virtanen', chartered: 2024, cadence: 'Quarterly' },
  { city: 'Madrid', country: 'Spain', region: 'Europe', coordinator: 'Miguel Ortega', chartered: 2021, cadence: 'First Saturday' },
  { city: 'Barcelona', country: 'Spain', region: 'Europe', coordinator: 'Miquel Pujol', chartered: 2022, cadence: 'Last Sunday' },
  { city: 'Lisbon', country: 'Portugal', region: 'Europe', coordinator: 'Miguel Carvalho', chartered: 2022, cadence: 'Third Tuesday' },
  { city: 'Rome', country: 'Italy', region: 'Europe', coordinator: 'Michele Romano', chartered: 2021, cadence: 'Second Friday' },
  { city: 'Milan', country: 'Italy', region: 'Europe', coordinator: 'Michele Conti', chartered: 2022, cadence: 'First Wednesday' },
  { city: 'Athens', country: 'Greece', region: 'Europe', coordinator: 'Michalis Papadopoulos', chartered: 2023, cadence: 'Quarterly' },
  { city: 'Warsaw', country: 'Poland', region: 'Europe', coordinator: 'Michał Kowalski', chartered: 2022, cadence: 'Last Wednesday' },
  { city: 'Prague', country: 'Czech Republic', region: 'Europe', coordinator: 'Michal Novák', chartered: 2023, cadence: 'Bi-monthly' },
  { city: 'Budapest', country: 'Hungary', region: 'Europe', coordinator: 'Mihály Kovács', chartered: 2023, cadence: 'Second Tuesday' },
  { city: 'Bucharest', country: 'Romania', region: 'Europe', coordinator: 'Mihai Popescu', chartered: 2024, cadence: 'Quarterly' },
  { city: 'Moscow', country: 'Russia', region: 'Europe', coordinator: 'Mikhail Petrov', chartered: 2021, cadence: 'In abeyance' },
  { city: 'Kyiv', country: 'Ukraine', region: 'Europe', coordinator: 'Mykhailo Tkachenko', chartered: 2021, cadence: 'In abeyance' },

  // Africa
  { city: 'Cairo', country: 'Egypt', region: 'Africa', coordinator: 'Mikha\'el Naguib', chartered: 2022, cadence: 'First Friday' },
  { city: 'Lagos', country: 'Nigeria', region: 'Africa', coordinator: 'Michael Adeyemi', chartered: 2022, cadence: 'Last Sunday' },
  { city: 'Accra', country: 'Ghana', region: 'Africa', coordinator: 'Michael Asante', chartered: 2023, cadence: 'Bi-monthly' },
  { city: 'Nairobi', country: 'Kenya', region: 'Africa', coordinator: 'Michael Mwangi', chartered: 2022, cadence: 'Third Saturday' },
  { city: 'Cape Town', country: 'South Africa', region: 'Africa', coordinator: 'Michael Botha', chartered: 2021, cadence: 'Second Tuesday' },
  { city: 'Johannesburg', country: 'South Africa', region: 'Africa', coordinator: 'Michael Tshabalala', chartered: 2022, cadence: 'First Monday' },
  { city: 'Addis Ababa', country: 'Ethiopia', region: 'Africa', coordinator: 'Mikael Gebre', chartered: 2023, cadence: 'Quarterly' },
  { city: 'Casablanca', country: 'Morocco', region: 'Africa', coordinator: 'Mikha\'il El-Amrani', chartered: 2024, cadence: 'Quarterly' },

  // Asia and Oceania
  { city: 'Tel Aviv', country: 'Israel', region: 'Asia and Oceania', coordinator: 'Mikhael Levi', chartered: 2021, cadence: 'Second Sunday' },
  { city: 'Beirut', country: 'Lebanon', region: 'Asia and Oceania', coordinator: 'Mikhael Haddad', chartered: 2023, cadence: 'Quarterly' },
  { city: 'Istanbul', country: 'Turkey', region: 'Asia and Oceania', coordinator: 'Mihail Demir', chartered: 2022, cadence: 'Bi-monthly' },
  { city: 'Mumbai', country: 'India', region: 'Asia and Oceania', coordinator: 'Michael D\'Souza', chartered: 2022, cadence: 'Last Saturday' },
  { city: 'New Delhi', country: 'India', region: 'Asia and Oceania', coordinator: 'Michael Fernandes', chartered: 2023, cadence: 'Bi-monthly' },
  { city: 'Bangalore', country: 'India', region: 'Asia and Oceania', coordinator: 'Michael Kuriakose', chartered: 2023, cadence: 'Quarterly' },
  { city: 'Manila', country: 'Philippines', region: 'Asia and Oceania', coordinator: 'Miguel Reyes', chartered: 2022, cadence: 'First Sunday' },
  { city: 'Singapore', country: 'Singapore', region: 'Asia and Oceania', coordinator: 'Michael Chan', chartered: 2021, cadence: 'Second Wednesday' },
  { city: 'Hong Kong', country: 'Hong Kong', region: 'Asia and Oceania', coordinator: 'Michael Wong', chartered: 2021, cadence: 'Last Tuesday' },
  { city: 'Tokyo', country: 'Japan', region: 'Asia and Oceania', coordinator: 'Maikeru Nakamura', chartered: 2022, cadence: 'Third Saturday' },
  { city: 'Seoul', country: 'South Korea', region: 'Asia and Oceania', coordinator: 'Michael Kim', chartered: 2023, cadence: 'Bi-monthly' },
  { city: 'Sydney', country: 'Australia', region: 'Asia and Oceania', coordinator: 'Michael Whitlam', chartered: 2021, cadence: 'First Tuesday' },
  { city: 'Melbourne', country: 'Australia', region: 'Asia and Oceania', coordinator: 'Michael Cavanagh', chartered: 2021, cadence: 'Second Monday' },
  { city: 'Auckland', country: 'New Zealand', region: 'Asia and Oceania', coordinator: 'Michael Tauranga', chartered: 2022, cadence: 'Third Wednesday' },
] as const;
