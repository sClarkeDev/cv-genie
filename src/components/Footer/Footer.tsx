import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { MaxWidthContainer } from '../MaxWidthContainer';

export const Footer = () => {
  return (
    <section className="bg-secondary">
      <MaxWidthContainer>
        <div className="flex flex-col space-y-5 py-5 px-5">
          <div className="flex justify-between">
            <div className="space-y-1">
              <p className="text-xl font-medium tracking-tight">sClarkeDev</p>

              <p className="text-sm text-secondary-muted">sclarkedev@gmail.com</p>
            </div>

            <a href="https://github.com/sClarkeDev/cv-genie" target="_blank" rel="noopener noreferrer">
              <GitHubLogoIcon className="h-5 w-5" />
            </a>
          </div>

          <p className="text-secondary-muted max-w-xl text-sm">
            CVGenie is a fictional company and website created for demonstration purposes. All content on this site is
            purely fictional and does not represent any actual products, services, or organizations.
          </p>

          <a className="text-sm text-secondary-muted" href="https://storyset.com/people">
            People illustrations by Storyset
          </a>
        </div>
      </MaxWidthContainer>
    </section>
  );
};
