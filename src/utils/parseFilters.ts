import { Filter, SearchKeys } from '@/models/search.model';

export const filtersToString = (filters?: Filter[]): string => {
  let result = '';

  if (!filters) return '';
  if (filters.length > 0) {
    filters.forEach(
      (f) =>
        (result = `${result}${
          !!f.value
            ? f.key === SearchKeys.YEAR
              ? `&${f.key}=${f.value.toString()}`
              : `&with_${f.key}=${f.value.toString()}`
            : ''
        }`)
    );
  }

  return result;
};
