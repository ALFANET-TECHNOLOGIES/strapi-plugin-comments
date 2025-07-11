import { SubNav, SubNavHeader, SubNavLink, SubNavSection, SubNavSections } from '@strapi/design-system';

export const SideNav = () => {
  // TODO: add translations
  return (
    <SubNav ariaLabel="Comments sub nav">
      <SubNavHeader label="Comments" />
      <SubNavSections>
        <SubNavSection label="Moderation">
          <SubNavLink href="/admin/plugins/@alfanet-technologies/strapi-plugin-comments/discover">
            Discover
          </SubNavLink>
          <SubNavLink
            href="/admin/plugins/@alfanet-technologies/strapi-plugin-comments/reports"
            withBullet={false}
          >
            Reports
          </SubNavLink>
        </SubNavSection>
      </SubNavSections>
    </SubNav>
  );
};