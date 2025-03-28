export class GlobalProduct {
    private id: number;
    private name: string;
    private description: string;
    private category: string[];
    private available: string;
    private stock: number;
    private price: number;
    private images: string[];
    private tenantId: string;
  
    constructor(
      id: number,
      name: string,
      description: string,
      category: string[],
      price: number,
      images: string[],
    ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.category = category;
      this.price = price;
      this.images = images;
    }
  
    getId(): number {
      return this.id;
    }
  
    getName(): string {
      return this.name;
    }
  
    getDescription(): string {
      return this.description;
    }
  
    getCategory(): string[] {
      return this.category;
    }
  
    getAvailable(): string {
      return this.available;
    }
  
    getStock(): number {
      return this.stock;
    }
  
    getPrice(): number {
      return this.price;
    }
  
    getImages(): string[] {
      return this.images;
    }
  
    // Setters
    setId(id: number): void {
      this.id = id;
    }
  
    setName(name: string): void {
      this.name = name;
    }
  
    setDescription(description: string): void {
      this.description = description;
    }
  
    setCategory(category: string[]): void {
      this.category = category;
    }
  
    setAvailable(available: string): void {
      this.available = available;
    }
  
    setStock(stock: number): void {
      this.stock = stock;
    }
  
    setPrice(price: number): void {
      this.price = price;
    }
  
    setImages(images: string[]): void {
      this.images = images;
    }

    setTenantId(tenantId: string) {
      this.tenantId = tenantId;
    }
  
    getTenantId(): string {
      return this.tenantId;
    }
  }