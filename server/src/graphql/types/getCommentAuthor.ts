import { CommentsPluginConfig } from '../../config';
import { Nexus } from '../../@types/graphql';

export const getCommentAuthor = (nexus: Nexus, config?: CommentsPluginConfig) => {
  const blockedProps = config?.blockedAuthorProps || [];
  return nexus.objectType({
    name: 'CommentAuthor',
    definition(t) {
      t.id('id');
      if (!blockedProps.includes('name')) {
        t.string('name');
      }
      if (!blockedProps.includes('email')) {
        t.string('email');
      }
      if (!blockedProps.includes('avatar')) {
        t.string('avatar');
      }
    },
  });
};
