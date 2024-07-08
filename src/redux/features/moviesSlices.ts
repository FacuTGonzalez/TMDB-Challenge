import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { moviesService } from '../services/moviesService/moviesService';
import { Movie, MoviesState } from '../../models/movies.model';
import { Filter, SearchKeys } from '@/models/search.model';

export const getPopularMovies = createAsyncThunk(
  'movies/getPopularMovies',
  async () => {
    const movies = await moviesService.getPopular();
    return movies;
  }
);

export const getTopRatedMovies = createAsyncThunk(
  'movies/getTopRatedMovies',
  async () => {
    const movies = await moviesService.getTopRated();
    return movies;
  }
);

export const getNowPlayingMovies = createAsyncThunk(
  'movies/getNowPlayingMovies',
  async () => {
    const movies = await moviesService.getNowPlaying();
    return movies;
  }
);

export const getSearchMovies = createAsyncThunk(
  'movies/getSearchMovies',
  async ({ query, key }: { query: string; key: string }, thunkAPI) => {
    const movies = await moviesService.getSearch(query, key);
    return movies;
  }
);

export const getSearchAdvanceMovies = createAsyncThunk(
  'movies/getSearchAdvanceMovies',
  async (filters: Filter[], thunkAPI) => {
    try {
      const updatedFilters = await Promise.all(
        filters.map(async (filter) => {
          if (filter.key === SearchKeys.CAST && filter.value !== '') {
            const personResponse = await moviesService.getPerson(filter.value);
            if (personResponse.results && personResponse.results.length > 0) {
              return { ...filter, value: personResponse.results[0].id.toString() };
            }
          } else if (filter.key === SearchKeys.COMPANIES && filter.value !== '') {
            const companyResponse = await moviesService.getCompany(filter.value);
            if (companyResponse.results && companyResponse.results.length > 0) {
              return { ...filter, value: companyResponse.results[0].id.toString() };
            }
          } else if (filter.key === SearchKeys.KEYWORDS && filter.value !== '') {
            const keywordResponse = await moviesService.getKeyword(filter.value);
            if (keywordResponse.results && keywordResponse.results.length > 0) {
              return { ...filter, value: keywordResponse.results[0].id.toString() };
            }
          }
          return filter;
        })
      );

      const moviesGenre = await moviesService.getAdvanceSearch(updatedFilters);
      return moviesGenre;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const initialState: MoviesState = {
  popular: [],
  topRated: [],
  nowPlaying: [],
  searched: [],
  advanceSearch: [],
  status: 'idle',
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    resetState: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPopularMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.popular = action.payload.results;
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(getTopRatedMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTopRatedMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.topRated = action.payload.results;
      })
      .addCase(getTopRatedMovies.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(getNowPlayingMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getNowPlayingMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.nowPlaying = action.payload.results;
      })
      .addCase(getNowPlayingMovies.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(getSearchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSearchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.searched = action.payload.results;
      })
      .addCase(getSearchMovies.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(getSearchAdvanceMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSearchAdvanceMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.advanceSearch = action.payload.results;
      })
      .addCase(getSearchAdvanceMovies.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default moviesSlice.reducer;
