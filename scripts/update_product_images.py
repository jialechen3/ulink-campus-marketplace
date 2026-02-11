import json
import re
import traceback

IMAGE_MAPPING = {
    "MacBook Air M2": "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?auto=format&fit=crop&q=80&w=800",
    "Dell UltraSharp 27 Monitor": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800",
    "Sony WH-1000XM5 Headphones": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    "Sony WH-1000XM4 Headphones": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    "iPad Air (5th Gen)": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800",
    "Kindle Paperwhite": "https://images.unsplash.com/photo-1592434134753-a70baf7979d5?auto=format&fit=crop&q=80&w=800",
    "Logitech MX Master 3S": "https://images.unsplash.com/photo-1625314887424-64b9a131ca5e?auto=format&fit=crop&q=80&w=800",
    "TI-84 Plus CE": "https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&q=80&w=800",
    "Calculus: Early Transcendentals": "https://images.unsplash.com/photo-1543004629-14207021ce0e?auto=format&fit=crop&q=80&w=800",
    "Organic Chemistry": "https://images.unsplash.com/photo-1532187875605-186e6af8e37c?auto=format&fit=crop&q=80&w=800",
    "Introduction to Algorithms": "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800",
    "Psychology: Core Concepts": "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800",
    "Microeconomics by Krugman": "https://images.unsplash.com/photo-1611974717483-360099195542?auto=format&fit=crop&q=80&w=800",
    "Campbell Biology": "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=800",
    "Mini Fridge": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    "Microwave": "https://images.unsplash.com/photo-1574265366533-5bc681b67f1b?auto=format&fit=crop&q=80&w=800",
    "Desk Lamp": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=800",
    "Bed Frame": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800",
    "Mirror": "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800",
    "Fan": "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?auto=format&fit=crop&q=80&w=800",
    "Area Rug": "https://images.unsplash.com/photo-1562512120-68199342713f?auto=format&fit=crop&q=80&w=800",
    "Chair": "https://images.unsplash.com/photo-1505797149-43c0ec70297f?auto=format&fit=crop&q=80&w=800",
    "IKEA Malm Desk": "https://images.unsplash.com/photo-1518455027359-f3f816b1a238?auto=format&fit=crop&q=80&w=800",
    "Nike Air Force 1s": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
    "North Face": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
    "Patagonia Better Sweater": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
    "Levi's 501": "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800",
    "Ray-Ban": "https://images.unsplash.com/photo-1511499767390-a7335958beba?auto=format&fit=crop&q=80&w=800",
    "Hoodie": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
    "Yoga Mat": "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800",
    "Dumbbell": "https://images.unsplash.com/photo-1583454110351-3cd3054fd2de?auto=format&fit=crop&q=80&w=800",
    "Wilson": "https://images.unsplash.com/photo-1617083281297-af33e8bf8939?auto=format&fit=crop&q=80&w=800",
    "Bike": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800"
}

def update_mock_data():
    try:
        with open("mockData.ts", "r", encoding="utf-8") as f:
            content = f.read()

        parts = content.split('export const MOCK_PRODUCTS: Product[] = ')
        if len(parts) < 2:
            print("Could not find MOCK_PRODUCTS export")
            return

        header = parts[0]
        footer = parts[1]
        
        # The products array starts with [ and ends with ];
        match = re.search(r'(\[.*\]);', footer, re.DOTALL)
        if not match:
            print("Could not find array in products section")
            return
            
        products_json = match.group(1)
        products = json.loads(products_json)

        for p in products:
            name = p.get('name', '')
            cat = p.get('category', '')
            found = False
            for key, url in IMAGE_MAPPING.items():
                if key.lower() in name.lower():
                    p['images'] = [url]
                    found = True
                    break
            if not found:
                if cat == "Electronics": p['images'] = ["https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800"]
                elif cat == "Books": p['images'] = ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"]
                elif cat == "Furniture": p['images'] = ["https://images.unsplash.com/photo-1555854817-5b2247a8175f?auto=format&fit=crop&q=80&w=800"]
                elif cat == "Clothing": p['images'] = ["https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=800"]
                elif cat == "Sports": p['images'] = ["https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800"]

        updated_products_json = json.dumps(products, indent=2)
        
        with open("mockData.ts", "w", encoding="utf-8") as f:
            f.write(header)
            f.write('export const MOCK_PRODUCTS: Product[] = ')
            f.write(updated_products_json)
            f.write(';')
            
        print("Success!")
    except Exception as e:
        print(f"Error: {e}")
        traceback.print_exc()

if __name__ == "__main__":
    update_mock_data()
