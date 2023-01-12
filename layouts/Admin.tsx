import Header from 'components/admin/Header';
import Sidebar from 'components/admin/Sidebar';

type AdminPropType = {
  children: React.ReactNode;
};

function Admin({ children }: AdminPropType) {
  return (
    <div>
      <Header />

      <main className="flex min-h-screen">
        <Sidebar />

        <section className="flex-1">{children}</section>
      </main>
    </div>
  );
}

export default Admin;
