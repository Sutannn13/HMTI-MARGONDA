export interface OrganizationPosition {
  id: string;
  name: string;
  role: string;
  division?: string;
  image?: string;
  isPlaceholder?: boolean;
}

export interface OrganizationStructure {
  title: string;
  positions: {
    kepala: OrganizationPosition[];
    secretary: OrganizationPosition[];
    treasurer: OrganizationPosition[];
    divisions: {
      name: string;
      positions: OrganizationPosition[];
    }[];
  };
}

export const structureData: OrganizationStructure = {
  title: 'Struktur Organisasi HMTI UBSI Margonda',
  positions: {
    kepala: [
      {
        id: 'ketua',
        name: 'Nama Ketua',
        role: 'Ketua Umum HMTI',
        isPlaceholder: true,
      },
      {
        id: 'wakil-ketua',
        name: 'Nama Wakil Ketua',
        role: 'Wakil Ketua Umum HMTI',
        isPlaceholder: true,
      },
    ],
    secretary: [
      {
        id: 'sekretaris-1',
        name: 'Nama Sekretaris 1',
        role: 'Sekretaris 1',
        isPlaceholder: true,
      },
      {
        id: 'sekretaris-2',
        name: 'Nama Sekretaris 2',
        role: 'Sekretaris 2',
        isPlaceholder: true,
      },
    ],
    treasurer: [
      {
        id: 'bendahara-1',
        name: 'Nama Bendahara 1',
        role: 'Bendahara 1',
        isPlaceholder: true,
      },
      {
        id: 'bendahara-2',
        name: 'Nama Bendahara 2',
        role: 'Bendahara 2',
        isPlaceholder: true,
      },
    ],
    divisions: [
      {
        name: 'Kominfo',
        positions: [
          { id: 'koor-kominfo', name: 'Nama Koordinator', role: 'Koordinator Kominfo', isPlaceholder: true },
          { id: 'anggota-kominfo-1', name: 'Nama Anggota', role: 'Anggota Kominfo', isPlaceholder: true },
          { id: 'anggota-kominfo-2', name: 'Nama Anggota', role: 'Anggota Kominfo', isPlaceholder: true },
        ],
      },
      {
        name: 'Litbang',
        positions: [
          { id: 'koor-litbang', name: 'Nama Koordinator', role: 'Koordinator Litbang', isPlaceholder: true },
          { id: 'anggota-litbang-1', name: 'Nama Anggota', role: 'Anggota Litbang', isPlaceholder: true },
          { id: 'anggota-litbang-2', name: 'Nama Anggota', role: 'Anggota Litbang', isPlaceholder: true },
        ],
      },
      {
        name: 'PSDM',
        positions: [
          { id: 'koor-psdm', name: 'Nama Koordinator', role: 'Koordinator PSDM', isPlaceholder: true },
          { id: 'anggota-psdm-1', name: 'Nama Anggota', role: 'Anggota PSDM', isPlaceholder: true },
          { id: 'anggota-psdm-2', name: 'Nama Anggota', role: 'Anggota PSDM', isPlaceholder: true },
        ],
      },
      {
        name: 'Humas',
        positions: [
          { id: 'koor-humas', name: 'Nama Koordinator', role: 'Koordinator Humasi', isPlaceholder: true },
          { id: 'anggota-humas-1', name: 'Nama Anggota', role: 'Anggota Humasi', isPlaceholder: true },
          { id: 'anggota-humas-2', name: 'Nama Anggota', role: 'Anggota Humasi', isPlaceholder: true },
        ],
      },
      {
        name: 'Danus',
        positions: [
          { id: 'koor-danus', name: 'Nama Koordinator', role: 'Koordinator Danus', isPlaceholder: true },
          { id: 'anggota-danus-1', name: 'Nama Anggota', role: 'Anggota Danus', isPlaceholder: true },
          { id: 'anggota-danus-2', name: 'Nama Anggota', role: 'Anggota Danus', isPlaceholder: true },
        ],
      },
      {
        name: 'Acara',
        positions: [
          { id: 'koor-acara', name: 'Nama Koordinator', role: 'Koordinator Acara', isPlaceholder: true },
          { id: 'anggota-acara-1', name: 'Nama Anggota', role: 'Anggota Acara', isPlaceholder: true },
          { id: 'anggota-acara-2', name: 'Nama Anggota', role: 'Anggota Acara', isPlaceholder: true },
        ],
      },
    ],
  },
};