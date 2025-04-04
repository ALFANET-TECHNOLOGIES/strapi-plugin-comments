import { StrapiContext, PathValue } from '../@types';
import { CommentsPluginConfig } from '../config';
import { getStoreRepository } from '../repositories';

export const getConfig = async <T extends keyof CommentsPluginConfig>(
  strapi: StrapiContext['strapi'],
  path: T,
  defaultValue: PathValue<CommentsPluginConfig, T>,
): Promise<CommentsPluginConfig[T]> => {
  return getStoreRepository(strapi).getLocalConfig(path, defaultValue);
};
