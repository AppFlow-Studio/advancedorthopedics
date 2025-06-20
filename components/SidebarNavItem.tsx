// components/SidebarNavItem.jsx (or wherever you place components)
import Link from 'next/link';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"; // Adjust import path

// Define types for props
interface SidebarNavItemProps {
  item: {
    title: string;
    href?: string;
    subLinks?: SidebarNavItemProps['item'][];
  };
  pathname: string;
  closeSidebar: () => void;
  level?: number;
}

export const SidebarNavItem = ({ item, pathname, closeSidebar, level = 0 }: SidebarNavItemProps) => {
    const hasSublinks = item.subLinks && item.subLinks.length > 0;

    // Calculate indentation based on nesting level
    // Using padding-left for indentation. Adjust multiplier as needed.
    const paddingLeftValue = `${1 + level * 1.25}rem`; // Base 1rem, +1.25rem per level

    if (hasSublinks) {
        // --- Render Accordion for items with sublinks ---
        const uniqueAccordionItemId = `sidebar-${item.title.replace(/\s+/g, '-')}-${level}`;

        // Note: Each level gets its own Accordion context here.
        // This allows multiple items at the same level to be open if you change type="multiple" below.
        // For strict one-item-open-per-level, more complex state management outside would be needed.
        return (
            <li>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={uniqueAccordionItemId} className="border-b-0">
                        <AccordionTrigger
                            style={{ paddingLeft: paddingLeftValue }}
                            // Adjust styling based on level if needed (e.g., text size)
                            className={`py-2 rounded-md text-base font-medium text-gray-700 text-left hover:bg-gray-100 hover:text-gray-900 hover:no-underline data-[state=open]:bg-gray-50 w-full`}
                        >
                            <span className="truncate">{item.title}</span> {/* Add truncate if titles get long */}
                        </AccordionTrigger>
                        <AccordionContent className="pt-1 pb-0"> {/* No base padding needed, handled by recursive calls */}
                            <ul className="flex flex-col space-y-1">
                                {/* Recursive call for sublinks */}
                                {item.subLinks!.map((sublink, subIndex) => (
                                    <SidebarNavItem
                                        key={`${uniqueAccordionItemId}-sub-${subIndex}`}
                                        item={sublink}
                                        pathname={pathname}
                                        closeSidebar={closeSidebar}
                                        level={level + 1} // Increment level for indentation
                                    />
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </li>
        );
    } else {
        // --- Render simple Link for items without sublinks ---
        return (
            <li>
                <Link
                    href={item.href || '#'} // Provide a fallback href
                    style={{ paddingLeft: paddingLeftValue }} // Apply indentation
                    // Adjust text size based on level if desired
                    className={`block w-full py-2 rounded-md text-base text-left font-medium hover:no-underline ${
                        pathname === item.href
                            ? 'bg-blue-50 text-blue-700' // Active style
                            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900' // Default style
                    }`}
                    onClick={closeSidebar}
                >
                     <span className="truncate">{item.title}</span>
                </Link>
            </li>
        );
    }
};