// Next
import Link from 'next/link';
import React from 'react';

interface BreadcrumbItemProps {
  title: string;
  url?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItemProps[];
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ title, active, url }) => {
  return (
    <li>
      <div className="flex items-center">
        <span className="block mx-2 text-gray-300 md:mx-4">/</span>
        {active ? (
          <span className="font-semibold text-secondary">{title}</span>
        ) : (
          <Link href={url || '#'} className="font-semibold text-secondary hover:text-primary" aria-disabled={!active}>
            {title}
          </Link>
        )}
      </div>
    </li>
  );
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="flex py-3 rounded-lg" aria-label="Breadcrumb">
      <ol className="inline-flex items-center">
        <li>
          <Link href="/home" className="font-medium text-gray-300 hover:text-primary">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <BreadcrumbItem key={index} title={item.title} active={item.active} url={item.url} />
        ))}
      </ol>
    </div>
  );
};

export default Breadcrumb;
