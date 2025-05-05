import React, { useEffect, useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  IconButton,
  Collapse,
  Skeleton,
  Pagination,
  Avatar,
  Button,
  TextField
} from '@mui/material';
import { Edit, Delete, ExpandMore, ExpandLess } from '@mui/icons-material';
import TeamRowDetails from './TeamRowDetails';
import { fetchTeamData } from '../api/teamService';
import { TeamMember } from '../types/teamTypes';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

const TeamTable: React.FC = () => {
  const [data, setData] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const cachedData = localStorage.getItem(`teamData-page-${page}`);
      if (cachedData) {
        setData(JSON.parse(cachedData));
        setLoading(false);
        return;
      }

      const teamData = await fetchTeamData(page);
      localStorage.setItem(`teamData-page-${page}`, JSON.stringify(teamData));
      setData(teamData);
      setLoading(false);
    };

    loadData();
  }, [page]);

  const handleExpandRow = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const handleSelectRow = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };



  return (
    
    <Box >
        <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 2,
        }}
      >
        {/* Search Bar */}
        <TextField
          placeholder="Search Task"
          variant="outlined"
          size="small"
          sx={{ width:{ xs:'60%',md:'25%'} }}
          InputProps={{
            startAdornment: (
                <IconButton sx={{  color: 'gray', display: 'flex', alignItems: 'center', }}>
                <SearchIcon />
                </IconButton>
            ),
            endAdornment: (
              <IconButton sx={{  color: 'gray', display: 'flex', alignItems: 'center', }}>
              <TuneIcon />
              </IconButton>
            ),
          }}
        />
        

        {/* Add User Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: 'none', fontWeight: 'bold' }}
        >
          + Add User
        </Button>
      </Box>
      {/* table */}
    <TableContainer sx={{ width: '100%' }}>
        <Table>
        <TableHead>
        <TableRow>
        <TableCell padding="checkbox">
        <Checkbox
        indeterminate={selectedRows.length > 0 && selectedRows.length < data.length}
        checked={selectedRows.length === data.length && data.length > 0}
        onChange={(e) => {
        if (e.target.checked) {
            setSelectedRows(data.map((row) => row.id.toString()));
        } else {
            setSelectedRows([]);
        }
        }}
    />
    </TableCell>

        <TableCell>
        {selectedRows.length > 0? `${selectedRows.length} selected`: 'Name'}
        </TableCell>
        <TableCell>Position</TableCell>
        <TableCell>Department</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Phone</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Edit</TableCell>
        </TableRow>
          </TableHead>
        <TableBody>
            {loading? Array.from({ length: 10 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell padding="checkbox">
                      <Skeleton variant="rectangular" width={20} height={20} />
                    </TableCell>
                    <TableCell colSpan={7}>
                      <Skeleton variant="text" />
                    </TableCell>
                  </TableRow>
                )): data.map((row) => (
                  <React.Fragment key={row.id}>
                    <TableRow
                    sx={{
                        '&:hover': {
                          backgroundColor: '#f5f5f5', 
                        },
                      }}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedRows.includes(row.id.toString())}
                          onChange={() => handleSelectRow(row.id.toString())}
                        />
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Avatar src={row.avatar} alt={row.name} />
                          <IconButton onClick={() => handleExpandRow(row.id.toString())}>
                            {expandedRow === row.id.toString() ? <ExpandLess /> : <ExpandMore />}
                          </IconButton>
                          {row.name}
                        </Box>
                      </TableCell>
                      <TableCell>{row.position}</TableCell>
                      <TableCell>{row.department}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.phone}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>
                        <IconButton>
                          <Edit />
                        </IconButton>
                        <IconButton>
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell colSpan={8} style={{ padding: 0, borderBottom: 'none' }}>
                        <Collapse in={expandedRow === row.id.toString()} timeout="auto" unmountOnExit>
                        <TeamRowDetails member={{ ...row, teamMates: [] }} />
                        </Collapse>
                    </TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Pagination
          count={10} 
          page={page}
          onChange={(_, value) => setPage(value)}
        />
      </Box>
    </Box>
  );
};

export default TeamTable;